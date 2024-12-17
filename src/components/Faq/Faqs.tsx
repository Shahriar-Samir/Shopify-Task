import React from "react";

const Faqs = () => {
  return (
    <section className="flex flex-col gap-5 mt-10">
      {[1, 2, 3, 4, 5].map((card) => {
        return (
          <div
            key={card}
            className="collapse collapse-arrow !rounded-lg !bg-white"
          >
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium text-black">
              What cars do you have in your inventory?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur. Integer facilisi sit
                tortor lobortis amet. Risus vestibulum nec fringilla sed in
                tincidunt tempus porta. Vulputate ornare vitae turpis mauris.
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Faqs;
