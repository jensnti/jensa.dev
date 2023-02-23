const { format, parseISO } = require('date-fns');
const { sv } = require('date-fns/locale');
const slugify = require('slugify');

const readableDate = (dateObj) => {
    if (typeof dateObj === 'string') {
        dateObj = parseISO(dateObj);
    }
    return format(dateObj, 'PPP', { locale: sv });
};

const frontDate = (dateObj) => {
    if (typeof dateObj === 'string') {
        dateObj = parseISO(dateObj);
    }
    return format(dateObj, 'MMM yyyy', { locale: sv });
};

const htmlDateString = (dateObj) => {
    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    if (typeof dateObj === 'string') {
        dateObj = parseISO(dateObj);
    }
    return format(dateObj, 'yyyy-MM-dd');
};

const yearString = (dateObj) => {
    if (typeof dateObj === 'string') {
        dateObj = parseISO(dateObj);
    }
    return dateObj.getFullYear();
};

const getProject = (projects, title) => {
    return projects.find((project) => project.title === title);
};

const tagFilter = (posts, tag) => {
    return posts.filter((item) => item.data.tags.includes(tag));
};

const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const limit = (arr, limit) => {
    return arr.slice(0, limit);
};

const getYears = (arr) => {
    const years = [];
    arr.forEach((item) => {
        const year = item.data.date.getFullYear();
        if (!years.includes(year)) {
            years.push(year);
        }
    });
    return years;
};

const getDemo = (demos, title) => {
    return demos.find((demo) => demo.data.title === title);
};

const slug = (str) => {
    if (!str) {
        return;
    }

    return slugify(str, {
        lower: true,
        strict: true,
        remove: /["]/g,
    });
};

module.exports = {
    slug,
    readableDate,
    frontDate,
    htmlDateString,
    yearString,
    getProject,
    tagFilter,
    shuffleArray,
    limit,
    getYears,
    getDemo,
};
