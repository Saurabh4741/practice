import { Container } from "@mui/material";

const ListCollection = ({listItems, RightTitle, LeftTitle, CTA, url, Description}) => {
  return (
    <div className="container mx-auto px-4 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="md:col-span-1 md:p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">{LeftTitle}</h1>
        </div>

        <div className="md:col-span-3 bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{RightTitle}</h2>
          <p>{Description}</p>
          <ul className="space-y-2 list-disc list-inside space-y-2">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-center">
                {item}
              </li>
            ))}
          </ul>

            {CTA !== "" && <a href={url} className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">
              {CTA}
            </a>}
        </div>
      </div>
    </div>
  );
};

export default ListCollection;
