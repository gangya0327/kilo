let routeTitle = ""
let siteTitle = ""

function setDocumentTitle() {
  if (!routeTitle && !siteTitle) {
    document.title = "加载中..."
  } else {
    if (siteTitle) {
      document.title = routeTitle + " - " + siteTitle
    } else {
      document.title = routeTitle
    }
  }
}

export default {
  setRouteTitle(title) {
    routeTitle = title
    setDocumentTitle()
  },
  setSiteTitle(title) {
    siteTitle = title
    setDocumentTitle()
  },
}
