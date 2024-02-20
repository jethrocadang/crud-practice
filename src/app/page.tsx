import TopicList from "./ui/topicsList";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/v1/topics/", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error", error);
  }
};

export default async function Home() {
  const { topics } = await getTopics();

  return (
    <main>
      <TopicList topics={topics}/>
    </main>
  );
}
