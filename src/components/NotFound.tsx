import { notFound } from "../assets/images";

export const NotFound = () => {
  return (
    <div className="bg-gray-50 h-screen w-screen flex justify-center fixed">
      <img className="object-scale-down" alt="404" src={notFound} />
    </div>
  );
};
