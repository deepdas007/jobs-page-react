import React from "react";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Router,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddJobPage from "./pages/AddJobPage";
import JobPage, { jobLoader } from "./pages/JobPage";

const App = () => {
    //Add Job API
    const addJob = async (addJob) => {
        const res = await fetch("/api/jobs", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(addJob),
        });
    };

    //Delete Job API
    const deleteJob = async (id) => {
        const res = await fetch(`/api/jobs/${id}`, {
            method: "DELETE",
        });

        return;
    };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route
                    path="/job/:id"
                    element={<JobPage deleteSelectedJob={deleteJob} />}
                    loader={jobLoader}
                />
                <Route
                    path="/add-job"
                    element={<AddJobPage addJobSubmit={addJob} />}
                />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
