import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";

const reviews = [
  {
    name: "Mateo",
    username: "@mateo",
    body: "Increíble. No tengo palabras. Esto es asombroso.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Josué",
    username: "@josue",
    body: "La atención al detalle es impresionante. Me encanta.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Juan",
    username: "@juan",
    body: "Cumplió con todas mis expectativas. ¡Gracias!",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Juliana",
    username: "@juliana",
    body: "Vi como mi marca personal cobraba vida. ¡Los mejores!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Julián",
    username: "@julian",
    body: "La calidad del trabajo es insuperable. ¡Recomendado!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "Los mejores en lo que hacen. ¡Gracias por todo",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-[24px] text-white/80 text-start",
        "dark:border-gray-50/[.1] dark:bg-gray-950/[.40] dark:hover:bg-gray-950/[.25]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <div className="dark relative flex mt-[100px] w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] mt-[16px]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
