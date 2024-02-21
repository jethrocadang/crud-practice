import Link from "next/link";
import RemoveBtn from "./removeBtn";
import { HiPencilAlt } from "react-icons/hi";
import { Topic } from "@prisma/client";



export default function TopicList({topics}:{topics: Topic[]}) {

  return (
    <>
    {topics.map(topic => (
      <div key={topic.id} className="p-4 border border-blue-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">{topic.title}</h2>
          <div>{topic.description}</div>
        </div>
        <div className="flex gap-2">
          <RemoveBtn id={topic.id} />
          <Link href={`/editTopic/${topic.id}`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
      ))}
    </>
  );
}
