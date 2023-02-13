import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const testiList = [
  {
    id: 1,
    img: "https://avatars.githubusercontent.com/u/88617147?v=4",
    name: "Fikry",
    comment: "Lorem",
  },
  {
    id: 2,
    img: "https://avatars.githubusercontent.com/u/88617147?v=4",
    name: "Fikry",
    comment: "Lorem",
  },
];

function Testimonial() {
  return (
    <div className="bg-gray-200 space-y-4 max-w-[1440px] p-8 mx-auto">
      <div className="text-4xl font-semibold">Lorem</div>
      <div className="">Lorem</div>
      <div className="w-full">
        <Splide
          options={{
            type: "slide",
            rewind: "false",
            arrows: true,
            gap: "1.5rem",
            pagination: false,
            perPage: 2,
          }}
          aria-label="React Splide Example"
          className="space-x-3 w-full"
        >
          {testiList.map((test) => (
            <div key={test?.id} className="w-6/12 flex space-x-3">
              <img
                src={test?.img}
                alt="Image 1"
                className="rounded-md h-full w-full max-w-[250px] max-h-[250px]"
              />
              <div className="">
                <div className="">{test?.name}</div>
                <div className="">{test?.comment}</div>
              </div>
            </div>
          ))}
          <SplideSlide></SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Testimonial;
