require_relative 'delighted/server'

map '/ok' do
  run(proc { |_env| ['200', { 'Content-Type' => 'text/html' }, ['Full speed ahead!']] })
end

run Delighted::Server

