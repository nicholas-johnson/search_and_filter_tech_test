const generateData = () => {
  const data = [];

  for (let i = 1; i <= 100; i++) {
    const app1 = Math.floor(Math.random() * 3) + 1;
    const app2 = Math.floor(Math.random() * 3) + 1;
    const app3 = Math.floor(Math.random() * 3) + 1;
    data.push({
      id: `app-${i}`,
      name: `App ${i}`,
      spend: Math.floor(Math.random() * 90001),
      cat1: `category ${app1}`,
      cat2: `category ${app1}.${app2}`,
      cat3: `category ${app1}.${app2}.${app3}`,
    });
  }

  return data;
};

module.exports = generateData();
