async function getRepos() {
  try {
    const response = await fetch('https://api.github.com/users/Sinehlombe/repos', {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });
    
    if (!response.ok) {
      console.error('Failed to fetch:', response.status, response.statusText);
      const text = await response.text();
      console.error('Body:', text);
      return;
    }

    const repos = await response.json();
    const simplified = repos.map(r => ({
      name: r.name,
      description: r.description,
      html_url: r.html_url,
      language: r.language,
      stargazers_count: r.stargazers_count,
      forks_count: r.forks_count,
      updated_at: r.updated_at
    }));
    console.log(JSON.stringify(simplified, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
}

getRepos();
