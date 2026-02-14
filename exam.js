// Q1 Grocery Store – Total Cost
const prices1 = [50, 120, 300, 80, 200];

const totalCost = prices1
  .filter(price => price > 100)
  .map(price => price * 1.05)
  .reduce((sum, price) => sum + price, 0);

console.log("Q1 Total Cost:", totalCost);


// Q2 Fitness App – Weekly Calories
const minutes = [10, 25, 40, 15, 60];

const totalCalories = minutes
  .filter(min => min >= 20)
  .map(min => min * 4)
  .reduce((sum, cal) => sum + cal, 0);

console.log("Q2 Calories:", totalCalories);


// Q3 Exam Results – Total Passed Marks
const marks = [35, 55, 80, 20, 45];

const totalPassedMarks = marks
  .filter(mark => mark >= 40)
  .reduce((sum, mark) => sum + mark, 0);

console.log("Q3 Total Passed Marks:", totalPassedMarks);


// Q4 Bank App – Total Credits
const transactions = [500, -200, 1000, -300, 700];

const totalCredits = transactions
  .filter(amount => amount > 0)
  .reduce((sum, amount) => sum + amount, 0);

console.log("Q4 Total Credits:", totalCredits);


// Q5 Online Sale – Discounted Bill
const prices2 = [800, 1500, 3000, 600, 1200];

const payableAmount = prices2
  .filter(price => price > 1000)
  .map(price => price * 0.85)
  .reduce((sum, price) => sum + price, 0);

console.log("Q5 Payable Amount:", payableAmount);


// Q6 Attendance – Reward Points
const hours1 = [5, 7, 8, 6, 9];

const totalPoints1 = hours1
  .filter(hour => hour >= 7)
  .map(hour => hour * 10)
  .reduce((sum, p) => sum + p, 0);

console.log("Q6 Points:", totalPoints1);


// Q7 Delivery App – Total Distance
const distances = [3, 6, 10, 4, 8];

const totalDistance = distances
  .filter(d => d > 5)
  .map(d => d + 1)
  .reduce((sum, d) => sum + d, 0);

console.log("Q7 Distance:", totalDistance);


// Q8 Salary System – Final Salary
const salaries = [18000, 25000, 30000, 15000];

const totalSalary = salaries
  .filter(s => s > 20000)
  .map(s => s + 2000)
  .reduce((sum, s) => sum + s, 0);

console.log("Q8 Salary Payout:", totalSalary);


// Q9 Study App – Total Study Time
const hours2 = [0.5, 1.5, 2, 0.75, 3];

const totalMinutes = hours2
  .filter(h => h > 1)
  .map(h => h * 60)
  .reduce((sum, m) => sum + m, 0);

console.log("Q9 Study Minutes:", totalMinutes);


// Q10 Electricity Usage – Monthly Bill
const units = [80, 120, 200, 90, 150];

const totalBill = units
  .filter(u => u > 100)
  .map(u => u * 6)
  .reduce((sum, u) => sum + u, 0);

console.log("Q10 Bill:", totalBill);


// Q11 Game Scores – Final Power Score
const scores1 = [30, 50, 90, 20, 70];

const powerScore = scores1
  .filter(s => s > 40)
  .map(s => s * 2)
  .reduce((sum, s) => sum + s, 0);

console.log("Q11 Power Score:", powerScore);


// Q12 Travel App – Total Fare
const rides = [5, 12, 20, 8, 15];

const totalFare = rides
  .filter(r => r > 10)
  .map(r => r + 50)
  .reduce((sum, r) => sum + r, 0);

console.log("Q12 Total Fare:", totalFare);


// Q13 Office Work – Productive Hours
const hours3 = [4, 6, 8, 5, 9];

const productiveMinutes = hours3
  .filter(h => h >= 6)
  .map(h => h * 60)
  .reduce((sum, h) => sum + h, 0);

console.log("Q13 Productive Minutes:", productiveMinutes);


// Q14 Shopping Cart – Reward Coins
const purchases = [300, 800, 1200, 400];

const totalCoins = purchases
  .filter(p => p > 500)
  .map(() => 10)
  .reduce((sum, c) => sum + c, 0);

console.log("Q14 Coins:", totalCoins);


// Q15 Fuel App – Total Fuel Cost
const liters = [3, 6, 10, 4, 8];

const fuelCost = liters
  .filter(l => l > 5)
  .map(l => l * 105)
  .reduce((sum, l) => sum + l, 0);

console.log("Q15 Fuel Cost:", fuelCost);


// Q16 Interview Classic – Sum of Cubes
const numbers1 = [1, 2, 3, 4, 5];

const sumOfCubes = numbers1
  .filter(n => n % 2 !== 0)
  .map(n => n ** 3)
  .reduce((sum, n) => sum + n, 0);

console.log("Q16 Sum of Cubes:", sumOfCubes);


// Q17 Performance Tracking – Bonus Points
const scores2 = [10, 20, 30, 40, 50];

const avg = scores2.reduce((a, b) => a + b, 0) / scores2.length;

const totalBonus = scores2
  .filter(s => s > avg)
  .map(s => s + 5)
  .reduce((sum, s) => sum + s, 0);

console.log("Q17 Bonus Score:", totalBonus);


// Q18 Subscription App – Final Bill
const plans = [199, 399, 599, 299];

const finalBill = plans
  .filter(p => p > 300)
  .map(p => p * 1.18)
  .reduce((sum, p) => sum + p, 0);

console.log("Q18 Final Bill:", finalBill);


// Q19 Learning App – Achievement Score
const scores3 = [45, 60, 70, 30, 80];

const achievementScore = scores3
  .filter(s => s >= 60)
  .map(s => s * s)
  .reduce((sum, s) => sum + s, 0);

console.log("Q19 Achievement Score:", achievementScore);


// Q20 Interview Finisher
const numbers2 = [3, 6, 9, 10, 12];

const finalSum = numbers2
  .filter(n => n % 3 === 0)
  .map(n => n * 10)
  .reduce((sum, n) => sum + n, 0);

console.log("Q20 Final Sum:", finalSum);
