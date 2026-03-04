import React from 'react';

const ContributionActivity = () => {
  // Create a 7x52 grid (7 days x 52 weeks) of contribution data
  const weeks = 52;
  const days = 7;
  
  // Generate mock contribution data
  const generateContributions = () => {
    const contributions = [];
    for (let week = 0; week < weeks; week++) {
      for (let day = 0; day < days; day++) {
        // Random contribution count (0-10) with higher probability of lower numbers
        const contributionCount = Math.floor(Math.random() * 11);
        contributions.push(contributionCount);
      }
    }
    return contributions;
  };

  const contributions = generateContributions();

  // Function to determine color based on contribution count
  const getColorClass = (count: number) => {
    if (count === 0) return 'bg-[#161b22] border-[#30363d]';
    if (count <= 2) return 'bg-[#0e4429] border-[#0d2d1d]';
    if (count <= 4) return 'bg-[#006d32] border-[#0d2d1d]';
    if (count <= 6) return 'bg-[#26a641] border-[#0d2d1d]';
    if (count <= 8) return 'bg-[#39d353] border-[#0d2d1d]';
    return 'bg-[#39d353] border-[#0d2d1d]'; // Bright green for highest contributions
  };

  // Month labels for the calendar
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthPositions = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44]; // Approx positions for each month

  return (
    <div className="mb-8 fade-in stagger-1">
      <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
        <span className="text-brand-green mr-2">#</span> Contribution Activity
      </h3>
      
      <div className="bg-[#0d1117] border border-[#30363d] p-6 rounded-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-400">
            <span className="text-brand-green font-semibold">Onwaba</span>'s activity in the past year
          </div>
          <div className="text-xs text-gray-500">
            Jan 14, 2025 - Jan 14, 2026
          </div>
        </div>
        
        {/* Contribution calendar */}
        <div className="overflow-x-auto pb-4">
          <div className="flex min-w-max">
            {/* Month labels */}
            <div className="flex mb-1 h-6">
              {months.map((month, index) => (
                <div 
                  key={month} 
                  className="text-xs text-gray-500 w-16" 
                  style={{ marginLeft: index === 0 ? '1.8rem' : '0' }}
                >
                  {month}
                </div>
              ))}
            </div>
            
            {/* Days of week labels */}
            <div className="flex flex-col">
              <div className="h-6 flex">
                <div className="w-12"></div> {/* Spacer for day labels */}
                {Array.from({ length: weeks }).map((_, weekIndex) => (
                  <div key={weekIndex} className="w-3 h-3"></div>
                ))}
              </div>
              
              {/* Main calendar grid */}
              <div className="flex">
                {/* Day labels */}
                <div className="flex flex-col mr-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-xs text-gray-500 h-3 flex items-center justify-end pr-1">
                      {day.substring(0, 1)}
                    </div>
                  ))}
                </div>
                
                {/* Contribution squares */}
                <div className="flex flex-col">
                  {Array.from({ length: days }).map((_, dayIndex) => (
                    <div key={dayIndex} className="flex">
                      {Array.from({ length: weeks }).map((_, weekIndex) => {
                        const contributionIndex = weekIndex * days + dayIndex;
                        const count = contributions[contributionIndex] || 0;
                        const colorClass = getColorClass(count);
                        
                        return (
                          <div
                            key={`${dayIndex}-${weekIndex}`}
                            className={`w-3 h-3 border m-px rounded-sm ${colorClass} tooltip`}
                            title={`${count} contributions on ${new Date(2025, 0, 14 + weekIndex * 7 + dayIndex).toLocaleDateString()}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex items-center justify-end mt-4">
          <div className="text-xs text-gray-500 mr-3">Less</div>
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-[#161b22] border border-[#30363d] rounded-sm"></div>
            <div className="w-3 h-3 bg-[#0e4429] border border-[#0d2d1d] rounded-sm"></div>
            <div className="w-3 h-3 bg-[#006d32] border border-[#0d2d1d] rounded-sm"></div>
            <div className="w-3 h-3 bg-[#26a641] border border-[#0d2d1d] rounded-sm"></div>
            <div className="w-3 h-3 bg-[#39d353] border border-[#0d2d1d] rounded-sm"></div>
          </div>
          <div className="text-xs text-gray-500 ml-3">More</div>
        </div>
      </div>
      
      {/* Summary statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-md text-center">
          <div className="text-2xl font-bold text-brand-green">1,248</div>
          <div className="text-xs text-gray-400">Total Contributions</div>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-md text-center">
          <div className="text-2xl font-bold text-brand-green">365</div>
          <div className="text-xs text-gray-400">Days Contributed</div>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-md text-center">
          <div className="text-2xl font-bold text-brand-green">12</div>
          <div className="text-xs text-gray-400">Months Active</div>
        </div>
      </div>
    </div>
  );
};

export default ContributionActivity;