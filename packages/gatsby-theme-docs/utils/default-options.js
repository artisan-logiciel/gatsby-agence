// allow to have access to lifecycle hooks during build
module.exports = ({
                    basePath = "/",
                    contentPath = "docs",
                    useExternalMDX = false
                  }) => ({
  basePath,
  contentPath,
  useExternalMDX
})
