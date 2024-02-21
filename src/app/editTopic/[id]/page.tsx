import EditTopicForm from "@/app/ui/editTopicForm";

const getTopicbyId = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/v1/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({
  params,
}: {
  params: { id: string };
}) {
  // Get the ID
  const { id } = params;

  // TOPIC API endpoint
  const { topic } = await getTopicbyId(id);

  // Destructure to get the TITLE & DESCRIPTION to TOPIC
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
