module.exports = {
  buildQuery(criteria) {
    const query = {};

    if (criteria.keywords) {
      query.$text = { $search: criteria.keywords }
    }

    if (criteria.city) {
      query.city = criteria.city;
    };

    if (criteria.type) {
      query.type = criteria.type;
    };

    return query;
  }
}
