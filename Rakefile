require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"


# Change your GitHub reponame
GITHUB_REPONAME = "nicknish/nicknish.github.io"
GITHUB_ORIGIN = "git@github.com:#{GITHUB_REPONAME}.git"

desc "Generate blog files"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "_site"
  })).process
end


desc "Generate and publish blog to gh-pages"
task :publish => [:generate] do
  Dir.mktmpdir do |tmp|
    cp_r "_site/.", tmp

    pwd = Dir.pwd
    Dir.chdir tmp

    system "git init"
    message = "Site updated at #{Time.now.utc}"
    system "git add . && git commit -m #{message.inspect}"
    system "git remote add origin #{GITHUB_ORIGIN}"
    system "git push origin master --force"

    Dir.chdir pwd
  end
end
