/**
 *  EasyHTTP Library
 *  Library for making HTTP Requests
 * 
 *  Promise syntax
 *  REQ(url, data) {
 *    return new Promise((resolve, reject) => {
 *      fetch(url, {})
 *        .then(res => res.json)
 *        .then(data => resolve(data))
 *        .catch(err => reject(err))
 *    })
 *  }
 *
 *  @version 3.0.0
 *  @author Brad Traversy
 *  @license MIT
 */

class EasyHTTP {
  // Make an HTTP GET request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  async delete(url) {
    const response = fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const resData = await response;
    return `Deleted... STATUS: ${resData.status}`;
  }
}

export const http = new EasyHTTP();