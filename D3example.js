            d3.select("body")
             .selectAll("p")
             .data([1,2,3,4,5], dta=>dta)
             .enter()
             .append("p")
             .text(dta=>dta)