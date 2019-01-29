class GitHub {
  constructor() {
    this.client_id = 'a5d18fe8315c9e3c55b5';
    this.client_secret = 'a95d6c931127238d6a8558b1f14928853051bc4e';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    //api.github.com
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repo = await repoResponse.json();

    return {
      profile,
      repo
    }
  }


}