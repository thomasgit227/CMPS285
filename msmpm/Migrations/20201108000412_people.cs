using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MSMBackend.Migrations
{
    public partial class people : Migration
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
                values: new object[,]
                {
                    { 2, 7, 7, new DateTimeOffset(new DateTime(2020, 11, 7, 18, 4, 11, 726, DateTimeKind.Unspecified).AddTicks(261), new TimeSpan(0, -6, 0, 0, 0)), 7, 7, 7, 7, 7, 7, "TestImage2", "TestLocatio2n", "TestProp2", 7, 7, 7, 7, 7, "TestUsername2", false, 7 },
                    { 4, 7, 7, new DateTimeOffset(new DateTime(2020, 11, 7, 18, 4, 11, 729, DateTimeKind.Unspecified).AddTicks(8911), new TimeSpan(0, -6, 0, 0, 0)), 7, 7, 7, 7, 7, 7, "TestImage4", "TestLocation4", "TestProp4", 7, 7, 7, 7, 7, "TestUsername4", false, 7 },
                    { 5, 7, 7, new DateTimeOffset(new DateTime(2020, 11, 7, 18, 4, 11, 729, DateTimeKind.Unspecified).AddTicks(8985), new TimeSpan(0, -6, 0, 0, 0)), 7, 7, 7, 7, 7, 7, "TestImage5", "TestLocation5", "TestProp5", 7, 7, 7, 7, 7, "TestUsername5", false, 7 },
                    { 6, 7, 7, new DateTimeOffset(new DateTime(2020, 11, 7, 18, 4, 11, 729, DateTimeKind.Unspecified).AddTicks(8996), new TimeSpan(0, -6, 0, 0, 0)), 7, 7, 7, 7, 7, 7, "TestImage6", "TestLocation6", "TestProp6", 7, 7, 7, 7, 7, "TestUsername6", false, 7 },
                    { 7, 7, 7, new DateTimeOffset(new DateTime(2020, 11, 7, 18, 4, 11, 729, DateTimeKind.Unspecified).AddTicks(9004), new TimeSpan(0, -6, 0, 0, 0)), 7, 7, 7, 7, 7, 7, "TestImage7", "TestLocation7", "TestProp7", 7, 7, 7, 7, 7, "TestUsername7", false, 7 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Properties");
        }
    }
}
