import React from "react";
import dynamic from "next/dynamic";

// Dynamically import sections as needed
const Gallery = dynamic(() => import("./Gallery"));
const Diptych = dynamic(() => import("./Diptych"));
const Slider = dynamic(() => import("./Slider"));
const DraggableSlider = dynamic(() => import("./DraggableSlider"));

const Layout = ({ sections }) => {
  if (!sections) return null;

  // Each section type has a label which corresponds to ACF's fieldGroupName
  const GALLERY = "Persona_Layout_categories_Sections_Gallery";
  const DIPTYCH = "Persona_Layout_categories_Sections_Diptych";
  const SLIDER = "Persona_Layout_categories_Sections_Slider";
  const DRAGGABLE_SLIDER = "Persona_Layout_categories_Sections_DraggableSlider";

  return sections.map((section, index) => {
    if (!section) return null;

    switch (section.fieldGroupName) {
      case GALLERY:
        return <Gallery key={`section-${index}`} {...section} />;
      case DIPTYCH:
        return <Diptych key={`section-${index}`} {...section} />;
      case SLIDER:
        return <Slider key={`section-${index}`} {...section} />;
      case DRAGGABLE_SLIDER:
        return <DraggableSlider key={`section-${index}`} {...section} />;
      default:
        return null;
    }
  });
};

export default Layout;
