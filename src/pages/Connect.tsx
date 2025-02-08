
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Image, Heart, MessageSquare, Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Connect = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Max's Mom",
      content: "Max enjoying his weekend at the park! 🐕",
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9",
      likes: 23,
      comments: 5,
    },
    {
      id: 2,
      author: "Luna's Dad",
      content: "Luna's first day at puppy school 🎓",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
      likes: 45,
      comments: 12,
    },
  ]);
  const { toast } = useToast();

  const handlePostSubmit = () => {
    toast({
      title: "Post Created",
      description: "Your post has been shared with the community!",
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="p-8 animate-fade-up">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Pet Community
              </h1>
              <p className="text-gray-500">
                Share moments with fellow pet lovers
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
              <div className="flex gap-4 mb-4">
                <Input
                  placeholder="Share something about your pet..."
                  className="flex-1"
                />
                <Button className="gap-2">
                  <Image className="w-4 h-4" />
                  Add Photo
                </Button>
              </div>
              <Button onClick={handlePostSubmit} className="w-full">
                Post Update
              </Button>
            </div>

            <div className="space-y-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt="Pet"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold mb-2">{post.author}</h3>
                    <p className="text-gray-600 mb-4">{post.content}</p>
                    <div className="flex gap-6">
                      <Button variant="ghost" className="gap-2">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" className="gap-2">
                        <MessageSquare className="w-4 h-4" />
                        {post.comments}
                      </Button>
                      <Button variant="ghost" className="gap-2">
                        <Share2 className="w-4 h-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Connect;
