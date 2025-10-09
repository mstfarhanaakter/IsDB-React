import React from 'react';
import { 
    Bar, 
    BarChart, 
    CartesianGrid, 
    LabelList, 
    ResponsiveContainer, 
    Tooltip, 
    XAxis, 
    YAxis } from 'recharts';

const ReviewChart = ({x}) => {
    return (
        <div>
            {/* Recharts Horizontal Bar Chart  start here*/}
      <div className="w-full px-4 sm:w-11/12 mx-auto pb-8 sm:pb-10">
        <h1 className="font-bold text-xl sm:text-2xl mb-5">Ratings</h1>
        <div className="overflow-x-auto">
          <ResponsiveContainer width="100%" height={300} minWidth={300}>
            <BarChart
              layout="vertical"
              data={x.ratings}
              margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={60} />
              <Tooltip />
              <Bar dataKey="count" fill="#FF8811">
                <LabelList dataKey="count" position="right" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="w-11/12 mx-auto pb-8">
        <h1 className="font-bold text-2xl mt-5 mb-2">Description</h1>
        <p className="text-[#627382]">{x.description}</p>
      </div>
        </div>
    );
};

export default ReviewChart;
