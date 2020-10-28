using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MSMBackend.Migrations
{
    public partial class SeedPropertyTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Properties",
                columns: new[] { "Id", "Chimney", "Door", "EditTime", "Electrical", "ExtOpenings", "ExtWalls", "Flooring", "Framework", "HVAC", "ImageURL", "Location", "Name", "Piers", "Plumbing", "Roof", "Sewer", "Shutters", "Username", "Utilities", "Windows" },
                values: new object[] { 2, 7, 7, new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)), 7, 7, 7, 7, 7, 7, "TestImage", "TestLocation", "TestProp", 7, 7, 7, 7, 7, "TestUsername", false, 7 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Properties",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
