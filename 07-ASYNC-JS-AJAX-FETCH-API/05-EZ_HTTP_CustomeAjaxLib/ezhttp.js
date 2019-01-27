function easyHTTP() {
    this.http = new XMLHttpRequest();

}

// METHODS: GET
easyHTTP.prototype.get = function(url, callback) {
        this.http.open('GET', url, true);
        //onload is deeper scope which means 'this' will lose it's meaning.
        // So, bring easy.HTTP into onload by setting the value of 'this' to a variable
        let self = this;
        this.http.onload = function() {
            if (self.http.status === 200) {
                callback(null, JSON.parse(self.http.responseText));
            } else {
                callback('Error: ' + self.http.status);
            }
        }
        this.http.send();
    }
    // METHODS: POST
easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data))
}

// METHODS: PUT
easyHTTP.prototype.put = function(url, data, callback) {
        this.http.open('PUT', url, true);
        this.http.setRequestHeader('Content-type', 'application/json');

        let self = this;
        this.http.onload = function() {
            callback(null, self.http.responseText);
        }

        this.http.send(JSON.stringify(data));
    }
    // METHODS: DELETE
easyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);
    let self = this;

    this.http.onload = function() {
        if (self.http.status === 200) {
            callback(null, 'Post Deleted');
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}