#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
#include <regex>
#include <cstdlib>
#include <unistd.h>

std::string hide_ip(const std::string& line) {
std::regex ip_regex("(\\d+\\.\\d+\\.\\d+\\.)\\d+");
return std::regex_replace(line, ip_regex, "$1xxx.xxx");
}

void run_nench() {
std::cout << "🚀 Menjalankan benchmark server dengan nench.sh...\n\n";
int execResult = system("curl -s wget.racing/nench.sh | bash > nench_result.txt 2>&1");
if (execResult != 0) {
std::cout << "❌ Benchmark gagal dijalankan.\n";
return;
}
sleep(2);
std::ifstream file("nench_result.txt");
if (!file.is_open()) {
std::cout << "❌ Gagal membaca output benchmark.\n";
return;
}
std::ostringstream output;
std::string line;
while (std::getline(file, line)) {
std::string l = hide_ip(line);
if (line.find("Processor") != std::string::npos) output << "🧠 " << l << '\n';
else if (line.find("CPU cores") != std::string::npos) output << "🧩 " << l << '\n';
else if (line.find("Frequency") != std::string::npos) output << "⏱️ " << l << '\n';
else if (line.find("RAM:") != std::string::npos) output << "📦 " << l << '\n';
else if (line.find("Kernel") != std::string::npos) output << "🐧 " << l << '\n';
else if (line.find("Disks:") != std::string::npos) output << "\n💽 " << l << '\n';
else if (line.find(" HDD") != std::string::npos) output << "💽 " << l << '\n';
else if (line.find("SHA256") != std::string::npos) output << "\n🔒 " << l << '\n';
else if (line.find("bzip2") != std::string::npos || line.find("AES") != std::string::npos) output << "🔒 " << l << '\n';
else if (line.find("ioping: seek rate") != std::string::npos) output << "\n🔍 " << l << '\n';
else if (line.find("ioping: sequential read") != std::string::npos) output << "📖 " << l << '\n';
else if (line.find("dd: sequential write") != std::string::npos) output << "\n✍️ " << l << '\n';
else if (line.find("1st run") != std::string::npos || line.find("2nd run") != std::string::npos || line.find("3rd run") != std::string::npos || line.find("average") != std::string::npos)
output << "   " << l << '\n';
else if (line.find("IPv4 speedtests") != std::string::npos) output << "\n🌐 " << l << '\n';
else if (line.find("your IPv4") != std::string::npos) output << "📡 " << l << '\n';
else if (line.find("Cachefly") != std::string::npos || line.find("Leaseweb") != std::string::npos || line.find("Softlayer") != std::string::npos || line.find("Online.net") != std::string::npos || line.find("OVH") != std::string::npos)
output << "🚀 " << l << '\n';
else if (line.find("No IPv6") != std::string::npos) output << "\n🛑 " << l << '\n';
}
file.close();
system("rm -f nench_result.txt");
std::cout << output.str();
}

int main() {
run_nench();
return 0;
}