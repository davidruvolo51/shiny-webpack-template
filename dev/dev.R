#'////////////////////////////////////////////////////////////////////////////
#' FILE: dev.R
#' AUTHOR: David Ruvolo
#' CREATED: 2021-04-12
#' MODIFIED: 2021-04-12
#' PURPOSE: workspace + project management
#' STATUS: working
#' PACKAGES: usethis, devtools
#' COMMENTS: NA
#'////////////////////////////////////////////////////////////////////////////


# pkgs
# install.packages("languageserver")  # optional: if using vscode
# install.packages("usethis")
# install.packages("devtools")
# install.packages("shiny")

# init project
usethis::create_project(".")
usethis::use_description(check_name = FALSE)
usethis::use_namespace()

usethis::use_package("shiny")

# version management
# remotes::install_github("davidruvolo51/pkgbump@*release")
pkgbump::set_pkgbump(c("DESCRIPTION", "package.json"))
pkgbump::pkgbump(version = "0.0.1")