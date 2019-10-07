import website_proto1 from './images/catalog/website_proto1.jpg';
import website_proto2 from './images/catalog/website_proto2.jpg';
import website_proto3 from './images/catalog/website_proto3.jpg';
import website_proto4 from './images/catalog/website_proto4.jpg';
import website_proto5 from './images/catalog/website_proto5.jpg';
import website_proto6 from './images/catalog/website_proto6.jpg';
import website_proto7 from './images/catalog/website_proto7.jpg';
import website_proto8 from './images/catalog/website_proto8.jpg';

const catalog = {
    1: {
        id: 1,
        href: "/product/one",
        title: "Eggs",
        img_src: website_proto1,
        alt_text: "eggs",
        description_1: 'object studies series',
        price: '1,000.00'
    },
    2: {
        id: 2,
        href:"/product/two",
        title: "Pink pokemon",
        img_src: website_proto2,
        alt_text: "eggs",
        description_1: 'object studies series'
    },
    3: {
        id: 3,
        href: "/product/three",
        title: "Lotus",
        img_src: website_proto3,
        alt_text: "eggs",
        description_1: 'object studies series'
    },
    4: {
        id: 4,
        href: "/product/four",
        title: "Art",
        img_src: website_proto4,
        alt_text: "eggs",
        description_1: 'object studies series'
    },
    5: {
        id: 5,
        href: "/product/five",
        title: "Bones",
        img_src: website_proto5,
        alt_text: "eggs",
        description_1: 'object studies series'
    },
    6: {
        id: 6,
        href: "/product/six",
        title: "marowak",
        img_src: website_proto6,
        alt_text: "eggs",
        description_1: 'object studies series'
    },
    7: {
        id: 7,
        href: "/product/seven",
        title: "Groon",
        img_src: website_proto7,
        alt_text: "eggs",
        description_1: 'object studies series'
    },
    8: {
        id: 8,
        href: "/product/eight",
        title: "Sunset",
        img_src: website_proto8,
        alt_text: "eggs",
        description_1: 'object studies series'
    }
}

export default catalog;

export const catalog_list = [
    catalog[1],
    catalog[2],
    catalog[3],
    catalog[4],
    catalog[5],
    catalog[6],
    catalog[7],
    catalog[8]
]