import React from "react";

export const Content = ({ hamburgerActive }) => {
  return (
    <section className={`content ${hamburgerActive ? "active-3d" : ""}`}>
      <article className="section" id="section-one">
        section one
      </article>
      <article className="section" id="section-two">
        section two
      </article>
      <article className="section" id="section-three">
        section three
      </article>
      <article className="section" id="section-four">
        section four
      </article>
      <article className="section" id="section-five">
        section five
      </article>
      <article className="section" id="section-six">
        section six
      </article>
    </section>
  );
};
