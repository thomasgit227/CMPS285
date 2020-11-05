using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MSMBackend.Migrations
{
    public partial class FirstSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Properties",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(maxLength: 250, nullable: false),
                    Location = table.Column<string>(nullable: false),
                    Username = table.Column<string>(nullable: false),
                    ImageURL = table.Column<string>(nullable: false),
                    Utilities = table.Column<bool>(nullable: false),
                    Roof = table.Column<int>(nullable: false),
                    ExtWalls = table.Column<int>(nullable: false),
                    ExtOpenings = table.Column<int>(nullable: false),
                    Framework = table.Column<int>(nullable: false),
                    Piers = table.Column<int>(nullable: false),
                    Chimney = table.Column<int>(nullable: false),
                    Door = table.Column<int>(nullable: false),
                    Windows = table.Column<int>(nullable: false),
                    Shutters = table.Column<int>(nullable: false),
                    Flooring = table.Column<int>(nullable: false),
                    Electrical = table.Column<int>(nullable: false),
                    Plumbing = table.Column<int>(nullable: false),
                    Sewer = table.Column<int>(nullable: false),
                    HVAC = table.Column<int>(nullable: false),
                    EditTime = table.Column<DateTimeOffset>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Properties", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Properties",
                columns: new[] { "Id", "Chimney", "Door", "EditTime", "Electrical", "ExtOpenings", "ExtWalls", "Flooring", "Framework", "HVAC", "ImageURL", "Location", "Name", "Piers", "Plumbing", "Roof", "Sewer", "Shutters", "Username", "Utilities", "Windows" },
                values: new object[] { 2, 7, 7, new DateTimeOffset(new DateTime(2020, 10, 29, 12, 40, 16, 731, DateTimeKind.Unspecified).AddTicks(6087), new TimeSpan(0, -5, 0, 0, 0)), 7, 7, 7, 7, 7, 7, "TestImage", "TestLocation", "TestProp", 7, 7, 7, 7, 7, "TestUsername", false, 7 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Properties");
        }
    }
}
