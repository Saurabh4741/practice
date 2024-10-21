
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const SwipeCards = ({cards, Title}) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const isEnd = scrollLeft + clientWidth >= scrollWidth;
        if (isEnd) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative md:m-20">
        <h1 className="text-center mb-10 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
          {Title}
        </h1>
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="snap-center w-[80%] sm:w-[60%] md:w-[45%] lg:w-[30%] bg-white rounded-lg shadow-lg flex-shrink-0"
          >
            <Link href={card.linkUrl}>
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-48 sm:h-64 object-cover rounded-t-lg"
                />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwipeCards;
