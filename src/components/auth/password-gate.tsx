"use client";

import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isAuthenticatedAtom } from "@/stores/auth.atom";

export function PasswordGate({ children }: { children: React.ReactNode }) {
	const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isCheckingAuth, setIsCheckingAuth] = useState(true);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const response = await fetch("/api/auth/validate", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ password }),
			});

			const data = await response.json();

			if (response.ok && data.token) {
				localStorage.setItem("auth_token", data.token);
				setIsAuthenticated(true);
				toast.success("Access granted");
			} else {
				toast.error(data.error || "Invalid password");
			}
		} catch (error) {
			toast.error("An error occurred");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		const token = localStorage.getItem("auth_token");
		if (token) {
			setIsAuthenticated(true);
		}
		setIsCheckingAuth(false);
	}, [setIsAuthenticated]);

	if (isCheckingAuth) {
		return null;
	}

	if (isAuthenticated) {
		return children;
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-app-background p-4">
			<div className="w-full max-w-md space-y-8 bg-app-background-2 p-6 rounded-lg border border-app-border-dark">
				<div className="text-center">
					<h2 className="text-2xl font-bold">Password Protected</h2>
					<p className="mt-2 text-app-gray">
						Please enter the password to access this site
					</p>
				</div>

				<form onSubmit={handleSubmit} className="mt-8 space-y-4">
					<Input
						type="password"
						placeholder="Enter password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="bg-app-background-3 border-app-border-gray"
						required
					/>
					<Button
						type="submit"
						className="w-full"
						disabled={!password || isLoading}
					>
						{isLoading ? "Validating..." : "Submit"}
					</Button>
				</form>
			</div>
		</div>
	);
}
