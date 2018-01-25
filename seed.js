const faker = require("faker");

const mongoose = require("mongoose");
const Blog = require("./models/blog");

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
Phasellus dignissim nibh mauris, in dictum risus ultrices quis. Cras risus eros, dictum ac tellus vel, \
viverra venenatis erat. Quisque vitae neque nec diam fermentum imperdiet nec vitae felis. Mauris molestie odio \
non neque porta, ac rutrum erat laoreet. Sed finibus odio quis pretium aliquet. Phasellus venenatis malesuada elit, \
et porttitor lorem maximus at. Phasellus convallis risus at ante tempor, non vestibulum nunc laoreet. \
Cras mauris sem, suscipit ac nisl non, cursus dapibus est. Suspendisse quis metus auctor, laoreet dui sed, varius mi.\
Cras auctor eros id diam efficitur, a euismod nisl efficitur. \
Cras pulvinar, odio eu condimentum bibendum, velit neque lobortis nulla, nec dapibus velit arcu quis dui. \
Morbi imperdiet malesuada orci, sit amet vulputate ligula tempor vel. \
Aenean sit amet sagittis ante, vulputate luctus diam. Nulla efficitur, ipsum sed iaculis mattis, \
elit arcu iaculis ligula, in sagittis arcu elit rhoncus magna. Morbi viverra bibendum ante, \
nec elementum nisi consectetur nec. Fusce sollicitudin velit ut diam bibendum ullamcorper. \
Sed blandit leo a magna pellentesque, vitae pharetra enim dapibus. Proin consequat sagittis molestie. \
Quisque nec sapien dolor. Nulla venenatis libero at fringilla vulputate. Quisque congue, purus sed iaculis commodo, \
sem ligula condimentum nulla, vel aliquam diam mi eget velit. In sed congue mi, at eleifend augue. Nulla facilisi. \
Maecenas venenatis sollicitudin volutpat. Vestibulum venenatis nec lectus ac volutpat."

seedDB = () => {
    Blog.remove({}).then(() => {
        for(var i = 0; i < 7; i++){
            Blog.create({
                title: faker.random.words(),
                author: faker.name.findName(),
                body: lorem,
                date: faker.date.past(),
                image: faker.random.image()
            });
            console.log("BLOG CREATED");
        }
    }).catch((err) => console.log(err.message));
}

module.exports = seedDB;