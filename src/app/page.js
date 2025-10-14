import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      {/* Logo at top center */}
      <div className="mb-12">
        <Image
          src="/logos.png"
          alt="Company Logo"
          width={200}
          height={80}
          className="mx-auto"
        />
      </div>
      
      {/* Program image in center */}
      <div className="mb-8">
        <Image
          src="/programImg.png"
          alt="Program Image"
          width={600}
          height={400}
          className="mx-auto"
        />
      </div>
      
      {/* Coming Soon text */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-600">We're working on something amazing!</p>
      </div>
    </div>
  );
}
