"use client";

import { useSession } from "next-auth/react";
import Login from "./components/Login";
import TeacherDashboard from "./components/TeacherDashboard";
import StudentDashboard from "./components/StudentDashboard";

export default function Page() {
  const { data: session } = useSession();

  if (!session) {
    return <Login />;
  }

  // Redirect based on user role
  if (session.role === "teacher") {
    return <TeacherDashboard />;
  } else if (session.role === "student") {
    return <StudentDashboard />;
  }

  return <div>Unauthorized</div>;
}
