module.exports = {
  buildQueryReports(criteria) {
    const query = { edited: true };

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
  },

  buildQueryServices(criteria) {
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
