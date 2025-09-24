import { CiSearch } from "react-icons/ci";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Search() {
  return (
    <div className="flex items-center gap-2 w-full">
      <Input type="text" placeholder="Search" className="w-full" />
      <Button variant={"secondary"}>
        <CiSearch />
      </Button>
    </div>
  );
}
