/** components/PhotoGallery.tsx */
"use client";

import styled from "@emotion/styled";
import { useState } from "react";

const images = [
  "/lyha/2.webp",
  "/lyha/3.webp",
  "/lyha/4.webp",
  "/lyha/5.webp",
  "/lyha/6.webp",
  "/lyha/7.webp",
  "/lyha/8.webp",
  "/lyha/1.webp",
];

const GalleryWrapper = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  background: white;
  border-radius: 10px;
  gap: 5px;
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 0.5rem;
  cursor: pointer;
  display: inline-block;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(19, 19, 19, 0.755);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 80%;
  object-fit: contain;
  border-radius: 1rem;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  color: gray;
  font-size: 40px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.49);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 3rem;
  right: 2rem;
  background: none;
  color: white;
  font-size: 40px;
  border: none;
  cursor: pointer;
`;

export default function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <GalleryWrapper>
        {images.map((src, idx) => (
          <Thumbnail
            key={idx}
            src={src}
            onClick={() => setSelectedIndex(idx)}
          />
        ))}
      </GalleryWrapper>

      {selectedIndex !== null && (
        <ModalOverlay onClick={() => setSelectedIndex(null)}>
          <CloseButton onClick={() => setSelectedIndex(null)}>×</CloseButton>
          <NavButton
            style={{ left: "1rem" }}
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
          >
            ‹
          </NavButton>
          <ModalImage
            src={images[selectedIndex]}
            onClick={(e) => e.stopPropagation()}
          />
          <NavButton
            style={{ right: "1rem" }}
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            ›
          </NavButton>
        </ModalOverlay>
      )}
    </>
  );
}
