'use client';

import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ScrollPositionEffectProps, useScrollPosition } from 'hooks/useScrollPosition';
import { SingleNavItem } from 'types';
import { navbarContent, NavbarContentType } from 'utils/data';
import { media } from 'utils/media';
import Container from './Container';
import Drawer from './Drawer';
import { HamburgerIcon } from './HamburgerIcon';
import Logo from './Logo';

type ScrollingDirections = 'up' | 'down' | 'none';
type NavbarContainerProps = { hidden: boolean; transparent: boolean };
type MenuItem = {
  title: string;
  children: MenuItem[];
};

export default function Navbar() {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState<NavbarContentType | undefined>();
  const [activeNavContent, setActiveNavContent] = useState<MenuItem | undefined>();

  const { toggle } = Drawer.useDrawer();
  const [scrollingDirection, setScrollingDirection] = useState<ScrollingDirections>('none');

  const [isHoveringNav, setIsHoveringNav] = useState(false);

  let lastScrollY = useRef(0);
  const lastRoute = useRef('');
  const stepSize = useRef(50);

  useScrollPosition(scrollPositionCallback, [router.asPath], undefined, undefined, 50);

  function scrollPositionCallback({ currPos }: ScrollPositionEffectProps) {
    const routerPath = router.asPath;
    const hasRouteChanged = routerPath !== lastRoute.current;

    if (hasRouteChanged) {
      lastRoute.current = routerPath;
      setScrollingDirection('none');
      return;
    }

    const currentScrollY = currPos.y;
    const isScrollingUp = currentScrollY > lastScrollY.current;
    const scrollDifference = Math.abs(lastScrollY.current - currentScrollY);
    const hasScrolledWholeStep = scrollDifference >= stepSize.current;
    const isInNonCollapsibleArea = lastScrollY.current > -50;

    if (isInNonCollapsibleArea) {
      setScrollingDirection('none');
      lastScrollY.current = currentScrollY;
      return;
    }

    if (!hasScrolledWholeStep) {
      lastScrollY.current = currentScrollY;
      return;
    }

    setScrollingDirection(isScrollingUp ? 'up' : 'down');
    lastScrollY.current = currentScrollY;
  }

  // Keep navbar visible unless scrolling down AND not hovering
  const isNavbarHidden = scrollingDirection === 'down' && !isHoveringNav;
  const isTransparent = scrollingDirection === 'none';

  // Default select the first sidebar item when a top-level nav is hovered
  useEffect(() => {
    if (activeNav?.children?.length) {
      // @ts-ignore – structure matches MenuItem shape
      setActiveNavContent(activeNav.children[0]);
    } else {
      setActiveNavContent(undefined);
    }
  }, [activeNav]);

  const itemHoverHandler = (item: MenuItem) => {
    setActiveNavContent(item);
  };

  return (
    <NavbarContainer
      hidden={isNavbarHidden}
      transparent={isTransparent}
      onMouseEnter={() => setIsHoveringNav(true)}
      onMouseLeave={() => {
        setIsHoveringNav(false);
        setActiveNav(undefined);
        setActiveNavContent(undefined);
      }}
    >
      <Content>
        <NextLink href="/" passHref>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </NextLink>
        <NavItemList>
          {navbarContent?.map((singleItem: NavbarContentType) => (
            <NavItem key={singleItem.title} item={singleItem} setActiveNav={setActiveNav} />
          ))}
        </NavItemList>
        <HamburgerMenuWrapper>
          <HamburgerIcon aria-label="Toggle menu" onClick={toggle} />
        </HamburgerMenuWrapper>

        {activeNav && (
          <MegaMenuWrapper>
            <MegaMenuSidebar>
              {activeNav?.children?.map((item: any) => {
                return (
                  <SidebarMenuItem
                    active={item?.title === activeNavContent?.title}
                    onMouseEnter={() => itemHoverHandler(item)}
                    key={item?.title}
                  >
                    {item?.title}
                  </SidebarMenuItem>
                );
              })}
            </MegaMenuSidebar>
            <MegaMenuContent>
              {activeNavContent?.children?.map((item) => {
                return (
                  <div key={item?.title}>
                    <MenuItemTitle>{item?.title}</MenuItemTitle>
                    <MenuItemLinkDiv>
                      {item?.children?.map((child, index) => (
                        <MenuItemLink href="#" key={index}>
                          {child}
                        </MenuItemLink>
                      ))}
                    </MenuItemLinkDiv>
                  </div>
                );
              })}
            </MegaMenuContent>
          </MegaMenuWrapper>
        )}
      </Content>
    </NavbarContainer>
  );
}

function NavItem({ item, setActiveNav }: { item: NavbarContentType; setActiveNav: (item: NavbarContentType) => void }) {
  const handleMegaMenuData = () => {
    setActiveNav(item);
  };

  return (
    <NavItemWrapper onMouseEnter={handleMegaMenuData}>
      <a href="#">{item?.title} +</a>
    </NavItemWrapper>
  );
}

const NavItemList = styled.div`
  display: flex;
  list-style: none;

  ${media('<desktop')} {
    display: none;
  }
`;

const HamburgerMenuWrapper = styled.div`
  ${media('>=desktop')} {
    display: none;
  }
`;

const LogoWrapper = styled.a`
  display: flex;
  margin-right: auto;
  text-decoration: none;

  color: rgb(var(--logoColor));
`;

const NavItemWrapper = styled.li<Partial<SingleNavItem>>`
  background-color: ${(p) => (p.outlined ? 'rgb(var(--primary))' : 'transparent')};
  border-radius: 0.5rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 2;

  &:hover {
    background-color: ${(p) => (p.outlined ? 'rgb(var(--primary), 0.8)' : 'transparent')};
    transition: background-color 0.2s;
  }

  a {
    display: flex;
    color: ${(p) => (p.outlined ? 'rgb(var(--textSecondary))' : 'rgb(var(--text), 0.75)')};
    letter-spacing: 0.025em;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-weight: 700;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const NavbarContainer = styled.div<NavbarContainerProps>`
  display: flex;
  position: sticky;
  top: 0;
  padding: 1.5rem 0;
  width: 100%;
  height: 8rem;
  z-index: var(--z-navbar);

  background-color: rgb(var(--navbarBackground));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  visibility: ${(p) => (p.hidden ? 'hidden' : 'visible')};
  transform: ${(p) => (p.hidden ? `translateY(-8rem) translateZ(0) scale(1)` : 'translateY(0) translateZ(0) scale(1)')};

  transition-property: transform, visibility, height, box-shadow, background-color;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
`;

const Content = styled(Container)`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MegaMenuWrapper = styled.div`
  display: flex;
  align-items: center; /* fixed typo */
  position: absolute;
  width: 90%;
  height: 400px;
  top: 65px;
  z-index: 50;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #f1f1f1;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const MegaMenuSidebar = styled.div`
  padding: 5px;
  height: 100%;
  width: 40%;
  background: #1b1f66;
`;

const MegaMenuContent = styled.div`
  padding: 15px;
  height: 100%;
  width: 60%; /* match 40% sidebar to avoid overflow */
  background: #fff;
  overflow-y: auto;
`;

interface SidebarMenuItemProps {
  active?: boolean;
}

const SidebarMenuItem = styled.p<SidebarMenuItemProps>`
  font-size: 16px;
  color: ${({ active }) => (active ? '#1b1f66' : '#fff')};
  background-color: ${({ active }) => (active ? '#fff' : 'transparent')};
  border-radius: 2px;
  cursor: pointer;
  padding: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #1b1f66;
    background-color: #fff;
  }
`;

const MenuItemTitle = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
  font-weight: 600;
  cursor: pointer;
  color: #2d2d2d;
`;

const MenuItemLinkDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: start; /* left/start alignment */
  justify-items: start;
  gap: 1rem;
  margin-left: 15px;
`;

const MenuItemLink = styled.a`
  font-size: 14px;
  padding-right: 40px;
  cursor: pointer;
  color: #2d2d2d;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #c4ce13ff;
    font-weight: 500;
  }
`;
