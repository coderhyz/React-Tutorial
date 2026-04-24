"use client"
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
function Home() {
    const router = useRouter();
    async function getLogin() {
        const res = await fetch("/api/login", {
            method: "GET",
        });
        const data = await res.json();
        console.log(data);
        return data;
    }

    useEffect(() => {
        const res = getLogin();
        res.then(data => {
            if (data.code === 0) {
                redirect("/");
            }
        });
    }, [router]);

    return (
        <div>
            Home content
        </div>
    );
}

export default Home;