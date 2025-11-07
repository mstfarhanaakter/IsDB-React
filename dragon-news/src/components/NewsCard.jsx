import { FaRegBookmark, FaShareAlt, FaStar, FaStarHalfAlt, FaRegStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    rating,
    total_view,
    thumbnail_url,
    details,
    tags,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  // 🔸 Render dynamic rating stars (supports 0.5 steps)
  const renderStars = (value) => {
    const stars = [];
    const fullStars = Math.floor(value);
    const hasHalfStar = value - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={`full-${i}`} className="text-orange-400" />);
    if (hasHalfStar) stars.push(<FaStarHalfAlt key="half" className="text-orange-400" />);
    for (let i = 0; i < emptyStars; i++) stars.push(<FaRegStar key={`empty-${i}`} className="text-orange-300" />);

    return stars;
  };

  return (
    <div className="card bg-base-100 border-0 mx-4 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3 ">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full border border-gray-300"
          />
          <div>
            <h2 className="font-semibold text-gray-800">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <button className="hover:text-primary transition-colors">
            <FaRegBookmark />
          </button>
          <button className="hover:text-primary transition-colors">
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="card-body px-5 py-3">
        <h1 className="card-title text-xl font-bold leading-snug text-gray-900">
          {title}
        </h1>

        {/* Thumbnail */}
        <figure className="mt-3">
          <img
            src={thumbnail_url}
            alt={title}
            className="rounded-lg w-full h-60 object-cover"
          />
        </figure>

        {/* Details */}
        <p className="text-gray-600 leading-relaxed mt-4">
          {details.slice(0, 200)}...
          <button className="text-orange-500 font-medium ml-1 hover:underline">
            Read More
          </button>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="badge badge-outline text-xs font-medium text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-5 pb-4 pt-2 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <div className="flex items-center">{renderStars(rating.number)}</div>
          <span className="font-semibold text-gray-800 ml-1">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye className="text-lg" />
          <span>{total_view.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
