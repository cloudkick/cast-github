/**
 * Check if change matches any filters.
 * 
 * @return {String} true if change matches a filter, false otherwise.
 */

function changeMatchesFilter(change) {
  var i, len, filters, filter;
  var filterTag, filterBranch, tag, branch;
  for (i = 0, len = filters.length; i < len; i++) {
    filter = filters[i];
    filterTag = new RegExp(filter.tag);
    filterBranch = new RegExp(filter.branch);
    tag = null;
    branch = null;

    if (filterTag && filterTag.test(tag)) {
      return true;
    }
    else if (filterBranch && filterBranch.test(branch)) {
      return true;
    }
  }

  return false;
}

function handlePayload(payload) {
  var i, len, changes, change;

  for (i = 0, len = payload.length; i < len; i++) {
    change = payload[i];

    if (changeMatchesFilter(change)) {
      // @TODO: Enqueue a job for the application deployment
    }
  }
}

exports.handlePayload = handlePayload;
