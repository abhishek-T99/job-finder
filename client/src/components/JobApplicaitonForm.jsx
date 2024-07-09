import { Button, HelperText, Input, Label, Textarea, } from "@windmill/react-ui";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useParams, Navigate, useLocation } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import jobsService from "services/jobs.service";

const JobApplicationForm = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
    const { state } = useLocation();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            cover_letter: "",
            resume: "",
        },
    });

    const {id} = useParams();

    const onSubmit = async (data) => {
        const { resume, cover_letter} = data;

        try {
            setError("");
            setIsLoading(true);
            await jobsService.applyJob(id, resume, cover_letter);
            toast.success("Applied successfully");

            setTimeout(() => {
                setRedirectToReferrer(true);
                setIsLoading(false);
            }, 1500);
        } catch (error) {
            setIsLoading(false);
            toast.error("Can't apply for this job");
            setError(error.response?.data.message);
        }
    };

    if (redirectToReferrer) {
        return <Navigate to={state?.from || "/applications"} />
    }

    return (
        <section className="grid place-items-center pt-4 mt-10">
            <div className="w-full md:w-1/2 shadow-md overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-3xl leading-6 font-medium text-gray-900 capitalize">
                        Apply Now
                    </h3>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="border-t border-gray-200 grid grid-cols-1"
                >
                    <Label className="bg-white px-4 py-1 ">
                        <span className="text-sm font-medium text-gray-500">Cover Letter</span>
                        <Textarea
                            name="cover_letter"
                            rows="8"
                            placeholder="Write a cover letter"
                            {...register("cover_letter", {
                                required: true
                            })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        >
                        </Textarea>
                        {errors?.cover_letter && errors.cover_letter.type === "required" && (
                            <HelperText className="mt-1 italic" valid={false}>
                                Cover letter required
                            </HelperText>
                        )}
                    </Label>
                    <Label className="px-4 py-1">
                        <span className="text-sm font-medium text-gray-500 w-1/4">Resume</span>
                        <Input
                            name="resume"
                            placeholder="Google drive link of resume"
                            {...register("resume", {
                                required: true,
                                pattern: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})(:\d{1,5})?(\/[^\s]*)?$/,
                            })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                        {errors?.resume && errors.resume.type === "required" && (
                            <HelperText className="mt-1 italic" valid={false}>
                                Resume link required
                            </HelperText>
                        )}
                        {error?.resume && errors.resume.type === "pattern" && (
                            <HelperText className="mt-1 italic" valid={false}>
                                Invalid resume link
                            </HelperText>
                        )}
                    </Label>
                    <div className="px-4 py-5 space-x-4">
                        <Button disabled={isLoading} type="submit">
                            {isLoading ? <PulseLoader color={"#0a138b"} size={10} loading /> : "Apply"}
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
    );
};

export default JobApplicationForm;
