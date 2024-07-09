import Layout from "layout/Layout";
import { Button, HelperText, Input, Label, Textarea, Select } from "@windmill/react-ui";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Navigate, Link, useLocation } from "react-router-dom";
import jobsService from "services/jobs.service";
import PulseLoader from "react-spinners/PulseLoader";

const CreateJob = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
    const { state } = useLocation()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { title, description, requirements, salary, location, company, job_type, application_deadline } = data;

        try {
            setError("");
            setIsLoading(true);
            await jobsService.createJob(title, description, requirements, Number(salary), location, company, job_type, application_deadline);
            toast.success("Job post created successfully")

            setTimeout(() => {
                setRedirectToReferrer(true);
                setIsLoading(false);
            }, 1500);
        } catch (error) {
            setIsLoading(false);
            toast.error("Can't create job post.")
        }
    }

    if (redirectToReferrer) {
        return <Navigate to={state?.from || "/posted-jobs"} />
    }

    return (
        <Layout title="Create Job Post">
            <section className="grid place-items-center pt-4 mt-10">
                <div className="w-full md:w-1/2 shadow-md overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-3xl leading-6 font-medium text-gray-900 capitalize">
                            Create a Job Post
                        </h3>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="border-t border-gray-200 grid grid-cols-1"
                    >
                        <Label className="px-4 py-1">
                            <span className="text-sm font-medium text-gray-500 w-1/4">Title</span>
                            <Input
                                name="title"
                                placeholder="Ex: Frontend Developer"
                                {...register("title", {
                                    required: true,
                                })}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                            {errors?.title && errors.title.type === "required" && (
                                <HelperText className="mt-1 italic" valid={false}>
                                    Title required
                                </HelperText>
                            )}
                        </Label>
                        <Label className="px-4 py-1">
                            <span className="text-sm font-medium text-gray-500 w-1/4">Description</span>
                            <Input
                                name="description"
                                placeholder="Ex: ReactJS, VueJS, AngularJS"
                                {...register("description", {
                                    required: true,
                                })}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                            {error?.description && error.description.type === "required" && (
                                <HelperText className="mt-1 italic" valid={false}>
                                    Description Required
                                </HelperText>
                            )}
                        </Label>
                        <Label className="bg-white px-4 py-1 ">
                            <span className="text-sm font-medium text-gray-500">Requirements</span>
                            <Textarea
                                name="requirements"
                                rows="4"
                                placeholder="Write job requirements"
                                {...register("requirements", {
                                    required: true
                                })}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            >
                            </Textarea>
                            {errors?.requirements && errors.requirements.type === "required" && (
                                <HelperText className="mt-1 italic" valid={false}>
                                    Requirements required
                                </HelperText>
                            )}
                        </Label>
                        <Label className="px-4 py-1">
                            <span className="text-sm font-medium text-gray-500 w-1/4">Salary</span>
                            <Input
                                name="salary"
                                type="number"
                                {...register("salary", {
                                    required: true,
                                })}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                            {errors?.salary && errors.salary.type === "required" && (
                                <HelperText className="mt-1 italic" valid={false}>
                                    Salary Required
                                </HelperText>
                            )}
                        </Label>
                        <Label className="px-4 py-1">
                            <span className="text-sm font-medium text-gray-500 w-1/4">Location</span>
                            <Input
                                name="location"
                                placeholder="Ex: Kathmandu"
                                {...register("location", {
                                    required: true,
                                })}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                            {errors?.location && errors.location.type === "required" && (
                                <HelperText className="mt-1 italic" valid={false}>
                                    Location Required
                                </HelperText>
                            )}
                        </Label>
                        <Label className="px-4 py-1">
                            <span className="text-sm font-medium text-gray-500 w-1/4">Company</span>
                            <Input
                                name="company"
                                placeholder="Ex: Company Name"
                                {...register("company", {
                                    required: true,
                                })}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                            {errors?.company && errors.company.type === "required" && (
                                <HelperText className="mt-1 italic" valid={false}>
                                    Company Required
                                </HelperText>
                            )}
                        </Label>
                        <Label className="px-4 py-1">
                            <span className="text-sm font-medium text-gray-500 w-1/4">Job Type</span>
                            <Select defaultValue={'full-time'}
                                name="job_type"
                                className="w-full px-4 py-2 mt-2 text-gray-darker bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                {...register("job_type", {
                                    required: "Job Type is required"
                                })}
                            >
                                <option value="full-time">Full-Time</option>
                                <option value="part-time">Part-Time</option>
                                <option value="freelance">Freelance</option>
                            </Select>
                            {errors?.job_type && (
                                <HelperText className="mt-1 italic" valid={false}>
                                    {errors.job_type.message}
                                </HelperText>
                            )}
                        </Label>
                        <Label className="px-4 py-1">
                            <span className="text-sm font-medium text-gray-500 w-1/4">Application Deadline</span>
                            <Input
                                name="application_deadline"
                                type="date"
                                {...register("application_deadline", {
                                    required: true,
                                })}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                            {errors?.application_deadline && (
                                <HelperText className="mt-1 italic" valid={false}>
                                    {errors.application_deadline.message}
                                </HelperText>
                            )}
                        </Label>
                        <div className="px-4 py-5 space-x-4">
                            <Button disabled={isLoading} type="submit">
                                {isLoading ? <PulseLoader color={"#0a138b"} size={10} loading /> : "Create"}
                            </Button>
                            <Link to={"/"}>
                                <Button layout="outline">
                                    Cancel
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    );
};

export default CreateJob;
