/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, COLORS, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" color={COLORS.gray[900]} />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <MainNavigation>
          <MenuLink href="/sale">
            Sale
          </MenuLink>
          <MenuLink href="/new">New&nbsp;Releases</MenuLink>
          <MenuLink href="/men">Men</MenuLink>
          <MenuLink href="/women">Women</MenuLink>
          <MenuLink href="/kids">Kids</MenuLink>
          <MenuLink href="/collections">Collections</MenuLink>
        </MainNavigation>
        <FooterNavigation>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </FooterNavigation>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background: white;
  height: 100%;
  width: 300px;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const MainNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FooterNavigation = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  gap: 14px;
`;

const Filler = styled.div`
  flex: 1;
`;

const MenuLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const FooterLink = styled.a`
  text-decoration: none;
  font-size: ${14 / 16}rem;
  color: ${COLORS.gray[700]};
`;

export default MobileMenu;
