import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

export default function Register() {
    return (
        <div className="flex-grow flex items-center">
            <Card className="w-96 mx-auto mb-8">
                <CardHeader>
                    <CardTitle className="text-2xl">Register Account</CardTitle>
                    <CardDescription>Please register to access our services.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <Button className="w-full">
                        <Icons.gitHub className="h-4 w-4 mr-2.5" />
                        Register with Github
                    </Button>
                    <NavLink
                        to="/auth/login"
                        className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "w-full"
                        )}>Already have account? Login here!</NavLink>
                </CardContent>
            </Card>
        </div>
    )
}