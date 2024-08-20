import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function App() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">Bambi Type Shit</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        Luv my friends and brodas
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Family</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary"  href="https://www.youtube.com/watch?v=RcGyPrGhljQ" target="_blank"  variant="flat">
            As well
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
