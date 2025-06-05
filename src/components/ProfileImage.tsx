
interface ProfileImageProps {
  src?: string;
  alt?: string;
  size?: number;
  responsive?: boolean;
}

export function ProfileImage({
  src = "/profile.jpg",
  alt = "Profile Picture",
  size = 200,
  responsive = false
}: ProfileImageProps) {
  const responsiveClasses = responsive
    ? "w-48 h-48 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
    : "";

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
      <div className="relative">
        <img
          src={src}
          alt={alt}
          className={`rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl animate-float ${responsiveClasses}`}
          style={!responsive ? { width: size, height: size } : {}}
        />
      </div>
    </div>
  );
}
