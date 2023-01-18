import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import Link from "../../ui/Link";

import { useLocation } from "react-router-dom";

import { ChevronRightIcon } from "@chakra-ui/icons";

function BreadCrumbs() {
  const location = useLocation();

  const renderCrumbs = (path: string, k: number, arr: string[]) => {
    if (path.length) {
      return (
        <BreadcrumbItem key={path}>
          <Link
            to={path === arr[arr.length - 1] ? "#" : path}
            variant="breadcrumb"
          >
            {path}
          </Link>
        </BreadcrumbItem>
      );
    }
  };

  if (location.pathname.length === 1) {
    return null;
  }

  return (
    <Breadcrumb separator={<ChevronRightIcon color="lightgrey" />}>
      <BreadcrumbItem>
        <Link to="/" variant="breadcrumb">
          Home
        </Link>
      </BreadcrumbItem>
      {location.pathname
        .split("/")
        .map((item, k, arr) => renderCrumbs(item, k, arr))}
    </Breadcrumb>
  );
}

export default BreadCrumbs;
