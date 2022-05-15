import { maintenance } from "../assets/images";

export const Maintenance = () => {
  return (
    <div className="bg-white h-screen w-screen flex justify-center fixed">
      <img className="object-scale-down" alt="maintenance" src={maintenance} />
    </div>
  );
};
